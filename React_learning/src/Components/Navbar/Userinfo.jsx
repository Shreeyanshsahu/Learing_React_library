import "../../index.css";

function Userinfo() {
    return (
        <div className="flex items-center gap-3">
            <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="h-12 w-12 rounded-full"
            />

            <div className="hidden md:block">
                <h3 className="font-semibold text-white">
                    John Doe
                </h3>

                <p className="text-sm text-zinc-400">
                    john@example.com
                </p>
            </div>
        </div>
    );
}

export default Userinfo;