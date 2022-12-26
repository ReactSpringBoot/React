import { observable } from 'mobx';

const userStore = observable({
    // state
    id : undefined,
    name : undefined,
    userNo : undefined,

    setId(id) {
        this.id = id
    },

    setName(name) {
        this.name = name
    },

    setUserNo(userNo) {
        this.userNo = userNo
    },
});

export default userStore;