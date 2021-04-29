import { ref } from 'vue'

export const STATUS: Record<Status, Status> = {
  isInitial: 'isInitial',
  isInquired: 'isInquired',
  isApproved: 'isApproved',
}

export type Status = 'isInitial' | 'isInquired' | 'isApproved'

export const useDoubleCheck = (params) => {
  const status = ref<Status>(STATUS.isInitial)

  async function approve (callback: (() => any) = () => {}) {
    await callback()
    this.status = STATUS.isApproved
  }

  async function inquire (callback: (() => any) = () => {}) {
    console.log('inquire')
    await callback()
    this.status = STATUS.isInquired;
  }

  async function reset (callback: (() => any) = () => {}) {
    await callback()
    this.status = STATUS.isInitial
  }

  return {
    status,
    approve,
    inquire,
    reset,
  }

}
