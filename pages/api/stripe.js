import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51L5m9wSJhn07W5cH8IPYNZ4A8T2PcleXpe3D3EomVf80orQoEm5ypqFVlYWX1xo9Tdsp8mnvehDORMW9Q81G0ldy00262rhmez');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        //console.log(req.body.cartItems);
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1L5mRnSJhn07W5cHa4jMMJsT' },
                    { shipping_rate: 'shr_1L5sOjSJhn07W5cHtpsQ5PgY' },
                ],
                line_items: req.body.map((item) => {
                    const img = item.image[0].asset._ref;
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/4tx7vr46/production/').replace('-webp', '.webp');

                    return {
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/canceled`,
            }
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}