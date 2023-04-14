import * as httpRequest from '~/utils/httpRequest';

export const getSuggested =async (q,type= 'more') =>{
    try{
        const res = await httpRequest.get('users', {
        params: {
            q,
            type,
        },
    });
    return res
    }catch(err){
        console.log(err)
    }
}