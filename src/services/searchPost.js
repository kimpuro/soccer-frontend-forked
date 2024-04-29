export const searchPost = async (column,param) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                column: column,
                param: param
            })
        });
        return res.json();
    } catch (error) {
        return error;
    }
}