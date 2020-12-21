
/**
 * 
 * @param {*} params 参数 对象格式
 */
export function filterParams(params = {}) {
  if (Object.keys(params).length === 0) {
    return {}
  }
  params = { ...params };
  for (let k in params) {
    if (params[k] === false || params[k] === "" || params[k] === undefined || params[k] === null || (Array.isArray(params[k]) && params[k].length == 0)) {
      delete params[k];
    }
  }
  return params;
}

/**
 *
 * @param {*} cookie参数字符串
 * 返回值是如果 不存在cookieString 返回null
 */
export function parseCookie(cookieString = '') {
  if (cookieString == '' || !cookieString) {
    return null;
  }
  let str = cookieString;
  let dataArray = str.split('&');
  let params = {};
  for (let i = 0; i < dataArray.length; i++) {
    let item = dataArray[i].split('=');
    let key = decodeURIComponent(item[0]);
    let val = decodeURIComponent(item[1]);
    if (key) {
      params[key] = val;
    }

  }
  return params;
}

/**
 * 数组对象根据属性值排序
 * @param property 属性名
 * @param desc true=升序 false=降序 默认升序
 */
export function objArrSort(property,desc=true) {
  return function(object1, object2) {
    let value1 = object1[property];
    let value2 = object2[property];
    if(desc == true){
      // 升序
      return value1 - value2;
    }else{
      // 降序
      return value2 - value1;
    }
  }
}

/**
 * 
 * @param {*} source  数组
 * @param {*} id 每一项的id
 * @param {*} parentId 父亲的id
 */
export function arrToTree(source, id, parentId) {
  if(source.length==0) {
    return [];
  }
  let cloneData = JSON.parse(JSON.stringify(source))
 
  let res = cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father[id] == child[parentId]);
    branchArr.length > 0 ? father['children'] = branchArr : ''
    return father[parentId] == -1       // 如果第一层不是parentId=0，请自行修改
  })
  return res;
}

/** 逆向返回下拉数组 reverseParent()(13,[])
 * @param id 最后一级id 
 *        dataArr 所有数据
 * 这种写法有问题会导致严格模式下报错
 */
export function reverseParent(id, dataArr) {
  let result = [];
  function findArray(id, dataArr) {
    let arr = dataArr;
    //当前id所有信息
    let obj = arr.find((item) => {
      return item.CategoryID == id;
    })
    //同类别数组的父级id
    let parentId = obj.ParentID;
    //找到同类别数组
    let parentArr = arr.filter((item) => {
      return item.ParentID == parentId;
    })
    result.unshift({
      options: parentArr,
      select: id
    })
    if (parentArr[0].ParentID && parentArr[0].ParentID != -1) {
      return findArray(parentArr[0].ParentID, dataArr)
    }
  }
  findArray(id, dataArr);
  //当没满时，且有下一级选项时，添加默认下级的一个选项
  let lastItemId = result[result.length - 1].select;
  let chidldArr = dataArr.filter((item) => {
    return item.ParentID == lastItemId;
  })
  if (chidldArr.length > 0) {
    result.push({
      options: chidldArr,
      select: ''
    })
  }
  return result;
}


/**
 * 防抖函数用于输入框不能频繁触发 fn回调 delay 500
 */
export function debounce(fn, delay = 500) {
  delay = delay || 600
  let timer
  return function () {
    let ctx = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(ctx, args)
    }, delay)
  }
}

/**
 * 判断是否是IE或者ie下面edg 那些垃圾浏览器
 */
export function isIE() {
  return !!window.ActiveXObject || "ActiveXObject" in window
}

/**
 * 判断是否是小屏幕分辨率
 */
export function miniPc() {
  return window.screen.width<=1280;
}



