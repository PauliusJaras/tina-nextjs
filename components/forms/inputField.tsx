"use client";

import { tinaField } from "tinacms/dist/react";

export default function InputField({ fieldData }) {
  switch (fieldData?.type) {
    case "text":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            type={fieldData?.type}
            required={fieldData?.required || false}
            minLength={fieldData?.minlength || 0}
            maxLength={fieldData?.maxLength || 60}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Įveskite tinkamą tekstą",
              )
            }
          ></input>
        </div>
      );
    case "tel":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || "Tel: 86 xxxxxxx"}
            name={fieldData?.name}
            type={fieldData?.type}
            required={fieldData?.required || false}
            minLength={fieldData?.minlength || 0}
            maxLength={fieldData?.maxLength || 15}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Įveskite telefono numerį",
              )
            }
          ></input>
        </div>
      );
    case "number":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.name}
            name={fieldData?.name}
            type={fieldData?.type}
            required={fieldData?.required || false}
            step={fieldData?.step}
            min={fieldData?.min}
            max={fieldData?.max}
            minLength={fieldData?.minlength || 0}
            maxLength={fieldData?.maxLength || 30}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Įveskite tinkamą skaičių ",
              )
            }
          ></input>
        </div>
      );
    case "email":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={"Email"}
            type={fieldData?.type}
            required={fieldData?.required || false}
            minLength={fieldData?.minlength || 0}
            maxLength={fieldData?.maxLength || 30}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Įveskite el. paštą",
              )
            }
          ></input>
        </div>
      );
    case "checkbox":
      return (
        <div className="flex flex-row items-center gap-4">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="h-8 w-8 border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            type={fieldData?.type}
            required={fieldData?.required || false}
          ></input>
        </div>
      );
    case "date":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            type={fieldData?.type}
            min={
              fieldData?.min ||
              new Date(new Date().setDate(new Date().getDate() + 1))
                .toISOString()
                .split("T")[0]
            }
            max={fieldData?.max}
            required={fieldData?.required || false}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Pasirinkite tinkamą datą",
              )
            }
          ></input>
        </div>
      );
    case "time":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <input
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            type={fieldData?.type}
            min={fieldData?.min || "09:00:00.00"}
            max={fieldData?.max || "18:00:0.00"}
            step={fieldData?.step}
            required={fieldData?.required || false}
            pattern={fieldData?.pattern || undefined}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Pasirinkite tinkamą laiką",
              )
            }
          ></input>
        </div>
      );
    case "textarea":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <textarea
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            required={fieldData?.required || false}
            minLength={fieldData?.minlength || 0}
            maxLength={fieldData?.maxLength || 30}
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                fieldData?.customValidity || "Įveskite tinkamą tekstą",
              )
            }
          ></textarea>
        </div>
      );
    case "select":
      return (
        <div className="flex flex-col">
          {fieldData?.label && <label>{fieldData?.label}</label>}
          <select
            data-tina-field={fieldData && tinaField(fieldData, "name")}
            className="border border-gray-700 p-2"
            placeholder={fieldData?.placeholder || fieldData?.name}
            name={fieldData?.name}
            required={fieldData?.required || false}
          >
            {fieldData?.options?.map((option, index) => {
              return (
                <option key={index} value={option?.option}>
                  {option?.option}
                </option>
              );
            })}
          </select>
        </div>
      );
    default:
      return null;
  }
}
