import { auth } from "@/auth";
import DraftMail from "@/components/DraftMail";
import Logout from "@/components/Logout";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <section className="flex justify-center items-center h-[100vh] flex-col">
      Welcome {session?.user?.name}!
      <DraftMail />
      <Logout />
    </section>
  );
};

export default DashboardPage;
