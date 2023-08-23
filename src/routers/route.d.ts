import { RouteObject } from 'react-router-dom';

export type RouteItem = Omit<RouteObject, 'children'> & {
  name?: string;
  title?: string;
  children?: RouteItem[];
};

// Omit函数：Omit<T, K extends string | number | symbol>，是把 K（属性或字段） 从 T中删除
