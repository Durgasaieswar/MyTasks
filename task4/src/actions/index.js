export const title = (title) => {
    return{
        type: 'TITLE',
        payload: title
    };
};
export const description = (desc) => {
    return{
        type: 'DESCRIPTION',
        payload: desc
    };
}