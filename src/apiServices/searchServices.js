import * as request from '~/utils/request';

export const search =async (q,type= 'more') =>{
    try{
        const res = await request.get('users', {
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