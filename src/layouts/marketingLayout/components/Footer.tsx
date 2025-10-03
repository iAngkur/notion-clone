import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className=" w-full p-6">
            <div className="max-w-7xl flex items-center">
                <Logo />
                <div className="md:ml-auto w-full flex items-center justify-between md:justify-end text-muted-foreground">
                    <Button variant="ghost" size="sm">Privacy Policy</Button>
                    <Button variant="ghost" size="sm">Terms & Conditions</Button>
                </div>
            </div>
        </footer>
    )
}
