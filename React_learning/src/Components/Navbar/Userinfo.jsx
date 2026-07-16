import "../../index.css";

function Userinfo({ mobile, sidebar = false, subscriberInfo }) {
  const user = {
    name: subscriberInfo?.name ?? "John Doe",
    username: subscriberInfo?.username ?? "johndoe231",
    avatar:
      subscriberInfo?.avatar ??
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  };

  return (
    <div
      className={`
        flex
        items-center
        gap-3

        backdrop-blur-2xl
        ${sidebar ? "backdrop:brightness-115" : "backdrop:brightness-75"}

        border border-white/20
        shadow-lg shadow-black/20

        py-1
        pl-1
        ${mobile ? "pr-1" : "pr-3"}

        transition-all
        duration-300
        ease-in-out

        hover:bg-white/10
        hover:scale-[1.02]
        active:scale-95

        ${sidebar ? "w-full rounded-4xl" : "w-fit rounded-full"}
      `}
    >
      <img
        src={user.avatar}
        alt={user.name}
        className={`
          rounded-full
          object-cover
          ${mobile ? "w-9 h-9" : "w-12 h-12"}
        `}
      />

      {!mobile && (
        <div className="flex flex-col">
          <h3 className="font-semibold text-white">
            {user.name}
          </h3>

          <p className="text-sm text-zinc-400">
            @{user.username}
          </p>
        </div>
      )}
    </div>
  );
}

export default Userinfo;