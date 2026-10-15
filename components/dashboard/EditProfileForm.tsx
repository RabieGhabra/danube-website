/* eslint-disable @next/next/no-img-element */
"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TEXTS = {
  profilePicTitle: "Edit Profile Picture",
  salutationLabel: "Salutation",
  emailLabel: "Email",
  emailPlaceholder: "Enter Email Address",
  firstNameLabel: "First Name",
  firstNamePlaceholder: "Enter First Name",
  lastNameLabel: "Last Name",
  lastNamePlaceholder: "Enter Last Name",
  nationalIdLabel: "National ID",
  nationalIdPlaceholder: "Enter National ID",
  phoneLabel: "Phone No.",
  phonePlaceholder: "13 466 9799",
  dobLabel: "Date of Birth",
  dobPlaceholder: "Enter Date of Birth",
  confirmAgePrefix: "I confirm that I am",
  confirmAgeHighlight: "18 years",
  confirmAgeSuffix: "or older",
  saveButtonText: "Save Changes",
};

const labelStyle =
  "font-medium text-[16px] leading-none tracking-normal text-primary shrink-0 text-left w-full sm:w-[120px]";
const inputStyle =
  "border border-transparent focus:outline-none font-medium text-[16px] leading-none tracking-normal placeholder:text-[#BCB3B3] w-full";
const rowStyle =
  "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full max-w-231.5";

const inputBaseStyle = { height: "54px", borderRadius: "17px", borderWidth: "2px" };
const whiteInputStyle = { ...inputBaseStyle, backgroundColor: "#FFFFFF" };

const fields = [
  { label: TEXTS.emailLabel, placeholder: TEXTS.emailPlaceholder, type: "email", borderColor: "#97E080" },
  { label: TEXTS.firstNameLabel, placeholder: TEXTS.firstNamePlaceholder, type: "text" },
  { label: TEXTS.lastNameLabel, placeholder: TEXTS.lastNamePlaceholder, type: "text" },
  { label: TEXTS.nationalIdLabel, placeholder: TEXTS.nationalIdPlaceholder, type: "text" },
];

export const EditProfileForm = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 w-full" style={{ backgroundColor: "#F2F3F7", borderRadius: "37px" }}>
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="relative">
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center"
            style={{ border: "3px solid #97E080", padding: "2px" }}
          >
            <img src="/danube-website/assets/images/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <Button
            type="button"
            className="cursor-pointer absolute bottom-2 right-4 p-0 rounded-full transition z-30 flex items-center justify-center shadow-sm"
            style={{ backgroundColor: "#97E080", width: "27px", height: "27px" }}
          >
            <img src="/danube-website/assets/icons/edit-(1).png" alt="Edit" style={{ width: "16px", height: "16px", objectFit: "contain" }} />
          </Button>
        </div>

        <h3 className="mt-4 font-semibold text-[16px] leading-none tracking-normal text-primary">
          {TEXTS.profilePicTitle}
        </h3>
      </div>

      <form className="space-y-5 flex flex-col items-center w-full">
        <div className={rowStyle}>
          <label className={labelStyle}>{TEXTS.salutationLabel}</label>
          <div className="relative w-full max-w-29 shrink-0">
            <select
              className="appearance-none text-[16px] font-semibold leading-none tracking-normal text-primary px-4 focus:outline-none w-full"
              style={{ backgroundColor: "#D9DBE3", height: "54px", borderRadius: "17px", borderWidth: "0px" }}
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-3">
              <img src="/danube-website/assets/icons/chevron-down.png" alt="" className="w-4 h-2 object-contain" />
            </div>
          </div>
        </div>

        {fields.map((field) => (
          <div className={rowStyle} key={field.label}>
            <label className={labelStyle}>{field.label}</label>
            <Input
              type={field.type}
              placeholder={field.placeholder}
              className={inputStyle}
              style={{ ...whiteInputStyle, ...(field.borderColor && { borderColor: field.borderColor }) }}
            />
          </div>
        ))}

        <div className={rowStyle}>
          <label className={labelStyle}>{TEXTS.phoneLabel}</label>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div
              className="flex items-center justify-center border border-transparent rounded-lg px-3 shadow-sm shrink-0 w-full max-w-29"
              style={whiteInputStyle}
            >
              <img src="/danube-website/assets/icons/ksa.png" alt="KSA" className="w-8 h-6 object-cover mr-2" />
              <span className="font-medium text-[16px] leading-none tracking-normal text-primary">+116</span>
            </div>

            <Input
              type="text"
              placeholder={TEXTS.phonePlaceholder}
              className={inputStyle}
              style={whiteInputStyle}
            />
          </div>
        </div>

        <div className={rowStyle}>
          <label className={labelStyle}>{TEXTS.dobLabel}</label>
          <Input
            type="text"
            placeholder={TEXTS.dobPlaceholder}
            onFocus={(e) => { e.target.type = "date"; }}
            onBlur={(e) => { e.target.type = "text"; }}
            className={inputStyle}
            style={whiteInputStyle}
          />
        </div>

        <div className={rowStyle}>
          <div className="hidden sm:block w-30 shrink-0" />
          <div className="flex items-center gap-3 w-full">
            <div className="relative flex items-center shrink-0">
              <input
                type="checkbox"
                id="age-check"
                defaultChecked
                className="peer cursor-pointer appearance-none border transition-all border-[#97E080] checked:bg-[#97E080] checked:border-[#97E080]"
                style={{ width: "24px", height: "24px", borderRadius: "7px" }}
              />
              <span
                className="pointer-events-none absolute top-1/2 left-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
                style={{
                  width: "10px",
                  height: "6px",
                  border: "2px solid #292D32",
                  borderTop: "none",
                  borderRight: "none",
                  transform: "translate(-50%, -60%) rotate(-45deg)",
                }}
              />
            </div>

            <label htmlFor="age-check" className="font-medium text-[16px] leading-none tracking-normal text-primary select-none">
              {TEXTS.confirmAgePrefix}{" "}
              <span className="font-bold" style={{ color: "#97E080" }}>{TEXTS.confirmAgeHighlight}</span>{" "}
              {TEXTS.confirmAgeSuffix}
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-8 w-full max-w-231.5">
          <div className="hidden sm:block w-30 shrink-0" />
          <Button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="text-black font-medium text-[16px] leading-none tracking-normal transition duration-200 w-full"
            style={{ height: "54px", borderRadius: "17px", backgroundColor: "#97E080", cursor: "default" }}
          >
            <span style={{ cursor: "pointer" }}>{TEXTS.saveButtonText}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};