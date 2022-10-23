import initStripe from 'stripe'
import { supabase } from '../../utils/supabase'

const handler = async (req,res) => {
        const stripe = initStripe(process.env.SECRET_KEY)
        const customer = await stripe.customers.create({
            email: req.body.record.email
        })
        res.send({
            massege: `stripe customer created: ${customer.id}`
        })
}

export default handler