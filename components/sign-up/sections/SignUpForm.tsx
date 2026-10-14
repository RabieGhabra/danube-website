/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BASE_INPUT =
  "w-full rounded-[17px] border-none bg-[#F2F3F7] text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#86D16E] placeholder:text-[#84899D] placeholder:font-normal placeholder:text-base placeholder:leading-none placeholder:tracking-normal";

const INPUT_HEIGHT = "h-13.5 max-[360px]:h-12 max-[280px]:h-11";
const RESPONSIVE_INPUT =
  "max-[360px]:text-xs max-[360px]:placeholder:text-sm max-[280px]:text-[11px] max-[280px]:placeholder:text-xs";

const PADDING_WITH_ICON =
  "pl-10 pr-4 max-[360px]:pl-9 max-[360px]:pr-3 max-[280px]:pl-8 max-[280px]:pr-2.5";

const PADDING_NO_ICON =
  "px-4 max-[360px]:px-3 max-[280px]:px-2.5";

const INPUT_CLASS = `${BASE_INPUT} ${INPUT_HEIGHT} ${PADDING_WITH_ICON} ${RESPONSIVE_INPUT}`;
const INPUT_CLASS_NO_ICON = `${BASE_INPUT} ${INPUT_HEIGHT} ${PADDING_NO_ICON} ${RESPONSIVE_INPUT}`;

const INPUT_STYLE: React.CSSProperties = {
  backgroundColor: "#F2F3F7",
  borderRadius: "17px",
};

const countries = [{ code: "SA", dial: "+966", flag: "/assets/icons/sa.png" }];

type IconInputProps = React.ComponentProps<typeof Input> & {
  icon: string;
  alt: string;
  wrapperClassName?: string;
};

const IconInput = ({ icon, alt, wrapperClassName = "relative", ...props }: IconInputProps) => (
  <div className={wrapperClassName}>
    <img
      src={icon}
      alt={alt}
      className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 max-[360px]:left-2.5 max-[360px]:h-4 max-[360px]:w-4 max-[280px]:left-2 max-[280px]:h-3.5 max-[280px]:w-3.5"
    />
    <Input className={INPUT_CLASS} style={INPUT_STYLE} {...props} />
  </div>
);

const CustomCheckbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <label className="group flex cursor-pointer items-start">
    <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
    <div
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors duration-200 max-[360px]:h-5 max-[360px]:w-5 max-[280px]:h-4 max-[280px]:w-4 ${
        checked ? "bg-[#86D16E]" : "bg-gray-200 group-hover:bg-gray-300"
      }`}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-black max-[360px]:h-3 max-[360px]:w-3 max-[280px]:h-2.5 max-[280px]:w-2.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  </label>
);

const CheckboxRow = ({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 max-[360px]:gap-2 max-[280px]:gap-1.5">
    <CustomCheckbox checked={checked} onChange={onChange} />
    <span
      className="text-primary text-[14px] sm:text-[16px] max-[360px]:text-[12px] max-[280px]:text-[10px]"
      style={{ fontWeight: 500, lineHeight: "140%" }}
    >
      {children}
    </span>
  </div>
);

const GreenText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontWeight: 600, color: "#97E080" }}>{children}</span>
);

const SignUpForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isAdult, setIsAdult] = useState(true);
  const [dobType, setDobType] = useState<"text" | "date">("text");
  const [selectedCountry] = useState(countries[0]);

  return (
    <div className="flex w-full items-center justify-center p-6 max-[360px]:p-3 max-[280px]:p-2 md:w-1/2">
      <div className="w-full max-w-197.5 space-y-5 sm:space-y-6 max-[360px]:space-y-4 max-[280px]:space-y-3">
        <div className="mb-6 text-center sm:mb-8 max-[360px]:mb-4 max-[280px]:mb-3">
          <h1
            className="text-primary text-[28px] sm:text-[32px] md:text-[35px] max-[360px]:text-[22px] max-[280px]:text-[18px]"
            style={{ fontWeight: 500, lineHeight: "100%" }}
          >
            Signup to
          </h1>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[45px] max-[360px]:text-[26px] max-[280px]:text-[22px]"
            style={{ fontWeight: 600, lineHeight: "100%", color: "#97E080" }}
          >
            Your Account
          </h2>
        </div>

        <form className="space-y-3 sm:space-y-4 max-[360px]:space-y-2.5 max-[280px]:space-y-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-[360px]:gap-2.5 max-[280px]:gap-2">
            <IconInput wrapperClassName="relative w-full sm:w-1/2" icon="/assets/icons/profile.png" alt="first name" placeholder="First Name" />
            <IconInput wrapperClassName="relative w-full sm:w-1/2" icon="/assets/icons/profile.png" alt="last name" placeholder="Last Name" />
          </div>

          <IconInput icon="/assets/icons/mail.png" alt="mail" type="email" placeholder="Enter Email" />
          <IconInput icon="/assets/icons/lock.png" alt="lock" type="password" placeholder="Enter Password" />

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-2 max-[360px]:gap-2.5 max-[280px]:gap-2">
          <div className="flex h-13.5 w-full shrink-0 cursor-default items-center gap-2 rounded-[17px] bg-[#F2F3F7] px-3 text-sm text-primary sm:w-auto max-[360px]:h-12 max-[280px]:h-11">
                <img
                src={selectedCountry.flag}
                alt={selectedCountry.code}
                className="h-5 w-7 shrink-0 rounded-[3px] object-cover max-[360px]:h-4 max-[280px]:h-3.5"
                />
                <span className="whitespace-nowrap text-sm font-medium max-[360px]:text-xs max-[280px]:text-[11px]">
                {selectedCountry.dial}
                </span>
                <ChevronDown className="cursor-pointer ml-auto h-4 w-4 shrink-0 text-black max-[360px]:h-3.5 max-[360px]:w-3.5 max-[280px]:h-3 max-[280px]:w-3" />
          </div>

          <Input
                type="tel"
                placeholder="Enter Phone Number"
                className={INPUT_CLASS_NO_ICON}
                style={INPUT_STYLE}
          />
          </div>

          <IconInput
            icon="/assets/icons/calendar.png"
            alt="calendar"
            type={dobType}
            placeholder="Date of Birth"
            onFocus={() => setDobType("date")}
            onBlur={(e) => !e.target.value && setDobType("text")}
          />

          <IconInput icon="/assets/icons/share.png" alt="referral" placeholder="Enter Referral Code (Optional)" />

          <div className="space-y-3 pt-2 max-[360px]:space-y-2.5 max-[280px]:space-y-2">
            <CheckboxRow checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)}>
              I accept{" "}
              <Link href="#" style={{ fontWeight: 600, color: "#97E080" }}>
                Terms &amp; Conditions
              </Link>{" "}
              by Signing up
            </CheckboxRow>

            <CheckboxRow checked={isAdult} onChange={() => setIsAdult(!isAdult)}>
              I confirm that I am <GreenText>18 years</GreenText> or older
            </CheckboxRow>
          </div>

          <Button
            type="button"
            className="cursor-pointer mt-4 h-13.5 w-full rounded-[18px] bg-[#86D16E] font-semibold text-primary shadow-md sm:mt-6 max-[360px]:h-12 max-[280px]:h-11"
            style={{ fontWeight: 600, fontSize: "16px", lineHeight: "100%" }}
          >
            Sign up
          </Button>

          <div
            className="mt-3 text-center text-primary text-[14px] sm:text-[16px] max-[360px]:text-[12px] max-[280px]:text-[10px]"
            style={{ fontWeight: 500, lineHeight: "100%" }}
          >
            Already have an account?{" "}
            <Link href="#" className="hover:underline" style={{ fontWeight: 600, color: "#97E080" }}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
