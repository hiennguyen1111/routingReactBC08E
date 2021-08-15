import { ADD_COMMENT } from "../types/FacebookType";

export const addCommentAction = () => {
    return {
        type:ADD_COMMENT,
        userComment: {...userComment, image:`https://i.pravatar.cc/50?u=${userComment.name}`}
    }
}