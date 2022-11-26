const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const createCheckoutSession = async (req, res) => {
    try {
        const { items, email } = req.body;
            
        const transformedItems = items.map(item => ({
            quantity: 1,
            price_data: {
                currency: 'usd',
                unit_amount: item.price * 100,
                product_data: {
                    name: item.title,
                    description: item.description,
                    images: [item.image],
                }
            },
        }));
        console.log(transformedItems)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
        //  shipping_rates: [''],
            shipping_address_collection: {
                allowed_countries: ['US', 'CA']
            },
            line_items: transformedItems,
            mode: 'payment',
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/checkout`,
            metadata: {
                email,
                images: JSON.stringify(items.map(item => item.image))
            }
        })
        res.status(200).json({ id: session.id })
       // res.setHeader("Access-Control-Allow-Origin", process.env.HOST);
    
        //res.redirect(303, session.url)
    } catch(err) {
        res.status(err.statusCode || 500).json(err.message)
    }
}

export default createCheckoutSession