'use client'

import { deleteReservation } from '@/lib/actions'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useTransition } from 'react'
import SpinnerMini from './SpinnerMini'

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    startTransition(() => {
      if (confirm('Are you sure you want to delete t his reservation?'))
        deleteReservation(bookingId)
    })
  }

  return (
    <button
      disabled={isPending}
      onClick={handleDelete}
      className='group flex justify-center items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
      {isPending ? (
        <SpinnerMini />
      ) : (
        <>
          <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
          <span className='mt-1'>Delete</span>
        </>
      )}
    </button>
  )
}

export default DeleteReservation
