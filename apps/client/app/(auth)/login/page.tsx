import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function () {
  return (
    <main className="w-full flex items-center justify-center  h-screen place-items-center">
      <div className="min-w-[12rem] w-full max-w-sm px-2 space-y-4">
        <Image
          src={"./images/logo2.svg"}
          alt="logo"
          priority
          className="m-auto"
          width={80}
          height={100}
        />
        <div>
          <h1 className="text-center text-2xl font-semibold my-1">Welcome</h1>
          <span className=" text-sm text-gray-400 text-center block">
            Enter your email to sign in to your account
          </span>
        </div>
        <form>
          <Input
            type="Email"
            name="email"
            id="email"
            placeholder="name@example.com"
            className="mb-4 h-10"
          />

          <Button className="bg-primary rounded-md font-medium  h-10 my-2 hover:bg-third text-primary-foreground w-full">
            Sign in with Email
          </Button>
        </form>

        <div className="relative ">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="flex gap-4">
          {oauthMethods.map(({ label, url }) => (
            <Button className="flex gap-3 rounded-md h-10 justify-center items-center font-medium hover:bg-slate-300 bg-accent text-black w-full">
              <Image
                priority
                alt={label}
                src={url}
                width={18}
                height={18}
                className="inline-block "
              />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}

const oauthMethods = [
  {
    label: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    label: "Github",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];
