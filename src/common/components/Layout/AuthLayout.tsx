import { AuthLayoutProps } from './data';

const AuthLayout = ({ children, classStyle }: AuthLayoutProps) => {
  return (
    <main>
      <section className="bg-authBG bg-repeat-x bg-center pt-180 pb-62 flex justify-center">
        <div
          className={`bg-white rounded-20 flex flex-col pt-40 w-[856px] h-[816px] ${classStyle}`}>
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
