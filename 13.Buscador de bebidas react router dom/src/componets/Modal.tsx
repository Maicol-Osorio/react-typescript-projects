import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../Stores/useAppStore';
import type { recipeByIdT } from '../Types';

export default function Modal() {
    const modal = useAppStore((state) => state.modal)
    const recipeById = useAppStore((state) => state.recipeById)
    const closeModal = useAppStore((state) => state.closeModal)
    const handleClickFavorites = useAppStore((state)=>state.handleClickFavorites)
    const favoriteExist = useAppStore((state)=>state.favoriteExist)
    

    const recipeIngredients = () => {
        const ingredients: JSX.Element[] = []
        for (let i = 1; i <= 6; i++) {
            const ingredietKey = recipeById[`strIngredient${i}` as keyof recipeByIdT]
            const ingredientValue = recipeById[`strMeasure${i}` as keyof recipeByIdT]
            if (ingredietKey && ingredientValue) {
                ingredients.push(
                    <li key={ingredietKey} className='text-lg font-medium'>
                        {ingredietKey} - {ingredientValue}
                    </li>
                )
            }
        }
        return ingredients
    }
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50 bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-orange-600 text-4xl font-extrabold my-5 text-center">
                                        {recipeById.strDrink}
                                        <div className='flex justify-center items-center p-5'>
                                            <img src={recipeById.strDrinkThumb} alt="" className='w-60 rounded-md ring-2 justify-center item ring-black' />
                                        </div>
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-orange-600 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades

                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-gray-900 text-xl font-bold my-5">
                                        {recipeIngredients()}
                                        {recipeById.strInstructions}

                                        <div className='grid grid-cols-2 gap-3'>
                                            <button className="text-white bg-red-500 capitalize p-3 w-full rounded-md font-bold cursor-pointer hover:bg-red-600  duration-200 mt-5 text-xl" onClick={closeModal}>cerrar</button>

                                            <button className="text-white bg-orange-500 capitalize p-3 w-full rounded-md font-bold cursor-pointer hover:bg-orange-600  duration-200 mt-5 text-xl" onClick={()=>handleClickFavorites(recipeById)}>{favoriteExist(recipeById.idDrink)? "eliminar de favoritos": "agregar a favoritos"}</button>

                                        </div>
                                    </Dialog.Title>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}