class SimplePromise {
    constructor(handle) {
        this.status = 'pending'
        this.value = undefined
        this.onFulfilledQueue = []
        this.onRejectedQueue = []
        // 函数当参数传递时，隐式绑定的函数会丢失绑定对象
        handle(this._resolve.bind(this), this._reject.bind(this))
    }
    _resolve(val) {
        this.status = "fulfilled"
        this.value = val;
        const run = () => {
            let cb;
            while (cb = this.onFulfilledQueue.shift()) {
                cb && cb(val)
            }
        }
        let observer = new MutationObserver(run)
        observer.observe(document.body, {
            // 监视body attributes的变化
            attributes: true
        })
        document.body.setAttribute('microtask', Math.random())
    }
    _reject(val) {
        this.status = "rejected"
        this.value = val;
        const run = () => {
            let cb;
            while (cb = this.onRejectedQueue.shift()) {
                cb && cb(val)
            }
        }
        let observer = new MutationObserver(run)
        observer.observe(document.body, {
            attributes: true
        })
        document.body.setAttribute('microtask', Math.random())
    }
    then(onFulfilled, onRejected) {
        // then 可以链式调用，则需要返回 Promise 对象。注：每调用一次 then，就会返回一个 Promise 对象
        return new SimplePromise((resolve, reject) => {
            // 依旧是在 then 中保存在 Promise 状态改变后（即执行resolve/reject）调用
            this.onFulfilledQueue.push(val => {
                // then 返回的 promise 状态由 onFulfilled / onRejected 的返回值决定
                let res = onFulfilled && onFulfilled(val);
                // onFulfilled 返回值为 Promise 对象，则返回该 Promise 对象。then 链式调用时是该对象调用 then
                if (res instanceof SimplePromise) {
                    // 到这里，then 返回的 Promise 对象的状态还未确定
                    // 这里调用 then 是为了传递 onFulfilled resolve 传入的值。这样，then 返回的 Promise 状态确定为 fulfilled，且 onFulfilled resolve 传入的值可以被下一个then 的 onFulfilled 拿到
                    return res.then(resolve)
                }
                // 在这里，then 返回的 Promise 对象状态改为 fulfilled
                resolve(res)
            })
            this.onRejectedQueue.push(val => {
                onRejected && onRejected(val);
                reject(val);
            })
        })
    }
    catch(onRejected) {
        this.then(undefined, onRejected)
    }
    static resolve(val) {
        return new SimplePromise(resolve => {
            resolve(val)
        })
    }
    static reject(val) {
        return new SimplePromise((resolve, reject) => {
            reject(val)
        })
    }
    static all(list) {
        // all 返回的 Promise 对象 resolve 传入的值
        let result = []
        return new SimplePromise(resolve => {
            list.forEach(item => {
                // 拿到每个 Promise 对象 resolve 传入的值
                item.then(res => {
                    result.push(res)
                    // if 判断不能放外面，因为 then 是微任务，if会执行
                    if (result.length === list.length) {
                        resolve(result)
                    }
                })
            });
        })
    }
    static race(list) {
        return new SimplePromise((resolve, reject) => {
            list.forEach(item => {
                item.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            });
        })
    }
    finally(callback) {
        return this.then(callback, callback)
    }
}