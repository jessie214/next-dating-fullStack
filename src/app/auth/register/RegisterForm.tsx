'use client';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function RegisterForm() {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    register,
    // setError,
    // getValues,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    // const result = await signInUser(data);
    // if (result.status === 'success') {
    //   router.push('/members');
    //   router.refresh();
    // } else {
    //   toast.error(result.error as string);
    // }
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome back to NextDating</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Name"
              variant="bordered"
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as string}
            />
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />

            <Button
              isDisabled={!isValid}
              color="secondary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
