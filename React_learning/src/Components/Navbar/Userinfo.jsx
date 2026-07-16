import "../../index.css";

function Userinfo({ mobile }) {
    return (
        <div className="flex items-center gap-3">
            <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className={` ${mobile ? ' h-9 w-9' : 'md:h-12 md:w-12'} avatar rounded-full`}
            />

            <div className={mobile ? "hidden" : "hidden md:block"}>
                <h3 className="fullname font-semibold text-white">
                    John Doe
                </h3>

                <p className=" username text-sm text-zinc-400">
                    @johndoe231$
                </p>
            </div>
        </div>
    );
}

export default Userinfo;