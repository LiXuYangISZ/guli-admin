import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
		meta: { title: '谷粒学院后台首页', icon: 'dashboard'}
		}]
    },

//     {
//         path: '/teacher',
//         component: Layout, //布局
//         redirect: '/teacher/table',
//         name: '讲师管理',
//         meta: { title: '讲师管理', icon: 'example' },
//         children: [{
//                 path: 'list',
//                 name: '讲师列表',
//                 component: () =>
//                     import ('@/views/edu/teacher/list'),
//                 meta: { title: '讲师列表', icon: 'table' }
//             },
//             {
//                 path: 'add',
//                 name: '添加讲师',
//                 component: () =>
//                     import ('@/views/edu/teacher/add'),
//                 meta: { title: '添加讲师', icon: 'tree' }
//             },
//             {
//                 path: 'edit/:id', //隐藏路由的写法. :id类似于sql中的占位符,用来接收参数
//                 name: '编辑讲师',
//                 component: () =>
//                     import ('@/views/edu/teacher/add'), //因为修改和编辑使用同一个表单,所以使用同一个路由.
//                 meta: { title: '编辑讲师', noCache: true },
//                 hidden: true //将该路由进行隐藏,让用户看起来如同是在当前页面进行修改.
//             }
//         ]
//     },
//     {
//         path: '/subject',
//         component: Layout, //布局
//         redirect: '/subject/table',
//         name: 'SubjectSort',
//         meta: { title: '课程分类管理', icon: 'nested' },
//         children: [{
//                 path: 'list',
//                 name: 'EduSubjectList',
//                 component: () =>
//                     import ('@/views/edu/subject/list'),
//                 meta: { title: '课程分类列表', icon: 'table' }
//             },
//             {
//                 path: 'import',
//                 name: 'EduSubjectImport',
//                 component: () =>
//                     import ('@/views/edu/subject/import'),
//                 meta: { title: '导入课程分类', icon: 'tree' }
//             }
//         ]
//     },
//     {
//         path: '/course',
//         component: Layout, //布局
//         redirect: '/course/table',
//         name: 'CourseAdd',
//         meta: { title: '课程管理', icon: 'form' },
//         children: [{
//                 path: 'list',
//                 name: 'EduCourseList',
//                 component: () =>
//                     import ('@/views/edu/course/list'),
//                 meta: { title: '课程列表', icon: 'table' }
//             },
//             {
//                 path: 'info',
//                 name: 'EduCourseInfo',
//                 component: () =>
//                     import ('@/views/edu/course/info'),
//                 meta: { title: '发布课程', icon: 'tree' }
//             },
//             {
//                 path: 'publish/:id',
//                 name: 'EduCoursePublishEdit',
//                 component: () =>
//                     import ('@/views/edu/course/publish'),
//                 meta: { title: '发布课程', noCache: true },
//                 hidden: true
//             },
//             {
//                 path: 'info/:id',
//                 name: 'EduCourseInfoEdit',
//                 component: () =>
//                     import ('@/views/edu/course/info'),
//                 meta: { title: '编辑课程基本信息', noCache: true },
//                 hidden: true
//             },
//             {
//                 path: 'chapter/:id',
//                 name: 'EduCourseChapterEdit',
//                 component: () =>
//                     import ('@/views/edu/course/chapter'),
//                 meta: { title: '编辑课程大纲', noCache: true },
//                 hidden: true
//             },

//         ]
//     },
    // {
    //     path: '/cms',
    //     component: Layout, //布局
    //     redirect: '/cms/table',
    //     name: '轮播图管理',
    //     meta: { title: '轮播图管理', icon: 'example' },
    //     children: [{
    //             path: 'banner/list',
    //             name: '轮播图列表',
    //             component: () =>
    //                 import ('@/views/cms/banner/list'),
    //             meta: { title: '轮播图列表', icon: 'table' }
    //         },
    //         {
    //             path: 'banner/add',
    //             name: '添加轮播图',
    //             component: () =>
    //                 import ('@/views/cms/banner/add'),
    //             meta: { title: '添加轮播图', icon: 'tree' }
    //         },
    //         {
    //             path: 'banner/edit/:id', //隐藏路由的写法. :id类似于sql中的占位符,用来接收参数
    //             name: '编辑轮播图',
    //             component: () =>
    //                 import ('@/views/cms/banner/add'), //因为修改和编辑使用同一个表单,所以使用同一个路由.
    //             meta: { title: '编辑轮播图', noCache: true },
    //             hidden: true //将该路由进行隐藏,让用户看起来如同是在当前页面进行修改.
    //         }
    //     ]
    // },
//     {
//         path: '/statistics',
//         component: Layout, //布局
//         redirect: '/statistics/create',
//         name: '统计分析',
//         meta: { title: '统计分析', icon: 'form' },
//         children: [{
//                 path: 'create',
//                 name: '生成统计数据',
//                 component: () =>
//                     import ('@/views/statistics/create'),
//                 meta: { title: '生成统计数据', icon: 'tree' }
//             },
//             {
//             path: 'show',
//             name: '图表显示',
//             component: () =>
//                 import ('@/views/statistics/show'),
//             meta: { title: '图表显示', icon: 'table' }
//             }
//         ]
//     },

//   {
//     path: '/acl',
//     component: Layout,
//     redirect: '/acl/user/list',
//     name: '权限管理',
//     meta: { title: '权限管理', icon: 'chart' },
//     children: [
//       {
//         path: 'user/list',
//         name: '用户管理',
//         component: () => import('@/views/acl/user/list'),
//         meta: { title: '用户管理' }
//       },
//       {
//         path: 'role/list',
//         name: '角色管理',
//         component: () => import('@/views/acl/role/list'),
//         meta: { title: '角色管理' }
//       },
//       {
//         path: 'role/form',
//         name: '角色添加',
//         component: () => import('@/views/acl/role/form'),
//         meta: { title: '角色添加' },
//         hidden: true
//       },
//       {
//         path: 'role/update/:id',
//         name: '角色修改',
//         component: () => import('@/views/acl/role/form'),
//         meta: { title: '角色修改' },
//         hidden: true
//       },
//       {
//         path: 'role/distribution/:id',
//         name: '角色权限',
//         component: () => import('@/views/acl/role/roleForm'),
//         meta: { title: '角色权限' },
//         hidden: true
//       },
//       {
//         path: 'menu/list',
//         name: '菜单管理',
//         component: () => import('@/views/acl/menu/list'),
//         meta: { title: '菜单管理' }
//       },
//       {
//         path: 'user/add',
//         name: '用户添加',
//         component: () => import('@/views/acl/user/form'),
//         meta: { title: '用户添加' },
//         hidden: true
//       },
//       {
//         path: 'user/update/:id',
//         name: '用户修改',
//         component: () => import('@/views/acl/user/form'),
//         meta: { title: '用户修改' },
//         hidden: true
//       },
//       {
//         path: 'user/role/:id',
//         name: '用户角色',
//         component: () => import('@/views/acl/user/roleForm'),
//         meta: { title: '用户角色' },
//         hidden: true
//       }

//     ]
//   },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export default router
