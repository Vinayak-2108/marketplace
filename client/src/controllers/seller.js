const base = "https://beautiful-bass-cuff.cyclic.app";

export const signup_seller = async (obj) => {
    const res = await fetch(`${base}/api/seller/signup`, {
        "method": "POST",
        "body": JSON.stringify(obj),
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}

export const login_seller = async (obj) => {
    const res = await fetch(`${base}/api/seller/login`, {
        "method": "POST",
        "body": JSON.stringify(obj),
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}

export const auth_seller = async (obj) => {
    const res = await fetch(`${base}/api/seller/auth`, {
        "method": "POST",
        "body": JSON.stringify(obj),
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}

export const get_all_products = async () => {
    const res = await fetch(`${base}/api/seller/allproducts`, {
        "method": "GET",
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}

export const add_product = async (obj) => {
    const res = await fetch(`${base}/api/seller/product`, {
        "method": "POST",
        "body": JSON.stringify(obj),
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}

export const update_product = async (obj) => {
    const res = await fetch(`${base}/api/seller/products`, {
        "method": "PUT",
        "body": JSON.stringify(obj),
        "headers": {"Content-Type": "application/json"}
    })

    const ans = await res.json();
    return ans;
}


