import express from 'express'
const api = express()


api.get('/health', (req,res)=>{
    return res.json({status:'all good'})
})


export default api