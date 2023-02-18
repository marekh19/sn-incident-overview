import type { FC } from 'react'

import { SleepingSvg } from './parts/SleepingSvg'

export const InstanceSleeping: FC = () => {
  return (
    <div className="flex w-full max-w-[90%] flex-col items-center justify-center">
      <SleepingSvg className="max-w-sm" />
      <h1 className="mt-5 text-center text-2xl font-light">
        It seems your ServiceNow instance went camping.
      </h1>
      <h2 className="mt-3 text-center text-2xl font-light">
        Login to wake it up and see its content.
      </h2>
    </div>
  )
}
