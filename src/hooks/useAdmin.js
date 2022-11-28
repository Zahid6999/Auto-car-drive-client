import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://auto-car-assinment-12-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin)
                    setisAdminLoading(false);
                })
        }

    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;