import {auth} from "@/server/auth"
import {redirect} from "next/navigation"
import ShiftForm from "./ShiftForm";

export default async function NewShiftPage() {
    const session = await auth()

    if (!session?.user) {
        console.log("No user found");
        redirect("/");
    }

    return(
        <main>
            <div>
                <h1>
                   Log a Shift
                </h1>
            </div>
            <div>
                <ShiftForm />
            </div>
        </main>

    );
}