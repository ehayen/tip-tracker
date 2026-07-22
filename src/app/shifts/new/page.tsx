import {auth} from "@/server/auth"
import {redirect} from "next/navigation"

export default async function NewShiftPage() {
    return(
        await auth()

        if(session.user ==  null) {
            redirect("/")
        }

    );
}