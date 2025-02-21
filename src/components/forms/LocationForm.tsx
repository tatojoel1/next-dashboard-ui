import { createLocation, updateLocation } from "@/lib/actions";
import { locationSchema, LocationSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "../InputField";

const LocationForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationSchema>({
    resolver: zodResolver(locationSchema),
  });
  const [state, formAction] = useFormState(
    type === "create" ? createLocation : updateLocation,
    {
      success: false,
      error: false,
    }
  );
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction(data);
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(
        `Location has been ${
          type === "create" ? "created" : "updated"
        } successfully!`
      );
      setOpen(false);
      router.refresh();
    }
  }, [state]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create new location" : "Update the location"}
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <InputField
          label="Location Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
            hidden
          />
        )}
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="City"
          name="city"
          defaultValue={data?.city}
          register={register}
          error={errors?.city}
        />
        <InputField
          label="State"
          name="state"
          defaultValue={data?.state}
          register={register}
          error={errors?.state}
        />
        <InputField
          label="Country"
          name="country"
          defaultValue={data?.country}
          register={register}
          error={errors?.country}
        />
        <InputField
          label="Postal Code"
          name="postalCode"
          defaultValue={data?.postalCode}
          register={register}
          error={errors?.postalCode}
        />
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        {state.error && (
          <span className="text-red-500">Something went wrong!</span>
        )}
        <button className="bg-blue-400 text-white p-2 rounded-md w-full">
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default LocationForm;
