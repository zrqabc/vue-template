import Cookies from 'js-cookie'
export default {
  getCookie: (name) => {
    let result = Cookies.get(name);
    return result;
  },
  setCookie: (name,val,expires,domain) => {//过期时间-天
    Cookies.set(name, val, {expires: expires,domain: domain});
  },
  removeCookie: (name,domain) => {
    Cookies.remove(name, {domain: domain});
  }
}
