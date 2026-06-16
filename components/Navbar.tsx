import { Box } from "lucide-react"
import Button from "./ui/Button";
const Navbar = () => {
    const isSignedIn = true;
    const username = "Pawan";
    const handleAuthClick = async () => {

    }
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className="logo" />
                        <span className="name">
                            Roomify
                        </span>
                    </div>

                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className="actions">
                    {
                        isSignedIn ? (
                            <>
                                <span className="greeting">
                                    {username ? `Hi ${username}` : "Signed in"}
                                </span>
                                <Button size="sm" onClick={handleAuthClick} className="btn">
                                    Log Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button size="sm" onClick={handleAuthClick} variant="ghost"
                                    className="login"
                                >
                                    Log In
                                </Button>
                                <a className="cta" href="#upload">
                                    Get Started
                                </a>
                            </>
                        )
                    }


                </div>
            </nav >
        </header >
    )
}

export default Navbar