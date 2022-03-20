import Login from './views/Login.vue'
import NotFound from './views/404.vue'

import Member from './views/member/Member.vue'
import Parlour from './views/parlour/Parlour.vue'
import Proposal from './views/proposal/Proposal.vue'
import Social from './views/social/Social.vue'
import Province from './views/province/Province.vue'


let routes = [
    {
        path: '/',
        name: 'Social',
        component: Social
    },
    {
        path: '/member',
        name: 'Member',
        component: Member
    },
    {
        path: '/parlour',
        name: 'Parlour',
        component: Parlour
    },
    {
        path: '/proposal',
        name: 'Proposal',
        component: Proposal
    },

    {
        path: '/province',
        name: 'Province',
        component: Province
    }
];

export default routes;