
/* 自定义Prmoise模块:IFFE */

(function (window){
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  class Promise {
    constructor(excutor) {
      const self = this         // 将当前promise对象保存
      self.status = PENDING   // 改状态，初始值为pending
      self.data = undefined     // 存储结果数据的属性
      self.callbacks = []       // 每个元素的结构{ onResolved(){}, onRejected(){} }
  
      function resolve(value) {
        // 如果当前状态不是pending，直接结束
        if(self.status !== PENDING){
          return
        }
  
        // 将状态改为resolved
        self.status = RESOLVED
        // 保存value数据
        self.data = value
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        if(self.callbacks.length > 0){
          setTimeout(() => {  // 执行所有成功的回调
            self.callbacks.forEach(callbacksObj => {
              callbacksObj.onResolved(value)
            });
          });
        }
      }
      function reject(reason) {
        if(self.status !== PENDING){
          return
        }
        // 将状态改为rejected
        self.status = REJECTED
        // 保存value数据
        self.data = reason
        // 如果有待执行的callback函数，立即异步执行回调函数onRejected
        if(self.callbacks.length > 0){
          setTimeout(() => {  // 执行所有成功的回调
            self.callbacks.forEach(callbacksObj => {
              callbacksObj.onRejected(reason)
            });
          });
        }
      }
      // 立即同步执行excutor
      try {
        excutor(resolve, reject)
      } catch (error) {   // 如果执行器抛出异常，promise对象变为rejected状态
        reject(error)
      }
    }
    
    // Promise原型对象的then()，指定成功和失败的回调函数，返回一个新的promise对象
    then (onResolved, onRejected){
      // 指定默认的失败的回调（实现错误/异常穿透的关键点）
      onResolved = typeof onResolved === 'function' ? onResolved: value => value        // 向后传递成功的value
      onRejected = typeof onRejected === 'function' ? onRejected: reason => {throw reason}    // 向后传递失败的reason

      const self = this
      // 返回一个新的promise对象
      return new Promise((resolve, reject) => {
        function handle(callback) {
          try {
            const result = callback(self.data)
            if(result instanceof Promise){
              result.then(
                value => resolve(value),
                reason => reject(reason)                
              )
              // result.then(resolve, reject)
            }else{
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        }

        if(self.status === PENDING){
          // 假设当前状态还是pending，将回调函数保存
          self.callbacks.push({
            onResolved (value){
              handle(onResolved)
            },
            onRejected (reason){
              handle(onRejected)
            }
          })
        }else if(self.status === RESOLVED){
          setTimeout(() => {
            handle(onResolved)
          });
        }else{
          setTimeout(() => {
            handle(onRejected)
          });
        }
      })
    }

    // Promise原型对象的catch()，指定失败的回调函数，返回一个新的promise对象
    catch (onRejected){
      return this.then(undefined, onRejected)
    }

    // Promise函数对象resolve方法，返回一个指定结果成功的promise
    static resolve = function (value) {
      // 返回一个成功/失败的promise
      return new Promise((resolve, reject) => {
        if(value instanceof Promise){    // 根据value的结果作为promise的结果
          value.then(resolve, reject)
        }else{      // value不是promise =》 promise变为成功，数据是value
          resolve(value)
        }
      });
    }
    // Promise函数对象reject方法，返回一个指定结果成失败的promise
    static reject = function (reason) {
      // 返回一个失败的promise
      return new Promise((resolve, reject) => {
        reject(reason)
      });
    }
    // Promise函数对象all方法，返回一个promise，所有promise都成功时才成功
    static all = function (promises) {
      const values = new Array(promises.length)     // 用来保存所有成功的value的数组
      let resolvedCount = 0       // 保存成功promise的数量
      return new Promise((resolve, reject) => {
        // 遍历获取每个promise的结果
        promises.forEach((p, index) => {
          Promise.resolve(p).then(value => { 
            resolvedCount++
            values[index] = value
            if(resolvedCount === promises.length){
              resolve(values)
            }
          },
          reason => { reject(reason) }
        )})
      });
    }
    // Promise函数对象race方法，其结果由第一个完成的promise决定
    static race = function (promises) {
      return new Promise((resolve, reject) => {
        // 遍历获取每个promise的结果
        promises.forEach((p, index) => {
          Promise.resolve(p).then(value => {     // 一旦有成功的，将return变为成功
            resolve(value)
          },
          reason => { reject(reason) }
        )})
      });
    }

    // 返回一个promise对象，他在指定的时间后才能确定结果
    static resolveDelay = function (value, time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(value instanceof Promise){    // 根据value的结果作为promise的结果
            value.then(resolve, reject)
          }else{      // value不是promise => promise变为成功，数据是value
            resolve(value)
          }
        }, time);
      });
    }
    // 返回一个promise对象，他在指定的时间后才失败
    static rejectDelay = function (reason, time) {
      setTimeout(() => {
        return new Promise((resolve, reject) => {
          reject(reason)
        });
      }, time);
    }
  }
  

  // 向外暴露Promise函数
  window.Promise = Promise
})(window)