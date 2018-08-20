import { param2Obj } from '@/utils';

const userMap = {
  Sysadmin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'static/icon/login-square.gif',
    name: 'Super Admin'
  },
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'static/icon/login-square.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'static/icon/login-fish.gif',
    name: 'Normal Editor'
  },
  visitor: {
    roles: ['visitor'],
    token: 'visitor',
    introduction: '我是用户',
    avatar: 'static/icon/login-light.gif',
    name: 'Normal Visitor'
  }
};

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body);
    return userMap[username];
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      console.log(userMap[token]); // 判断是啥账户
      return userMap[token];
    } else {
      return false;
    }
  },
  logout: () => 'success'
};
