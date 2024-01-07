async function errorHadling() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("function is reject")
        }, 8000);
    })
}

async function Getresult() {
    try {
    const result = await errorHadling();
    console.log("result:", result);
} 
catch(error) {
    console.error("Erorr in Function");
}
}

Getresult();