import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51L5m9wSJhn07W5cHTMeGk9Gcn3O2eLNC8bYii3hiKSvKKObIOoYnullnn8L2FThaOGGh1BcbXrSxRAQvcoIul3pL00cmV2erCP');
    }

    return stripePromise;
}

export default getStripe;