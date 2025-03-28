import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ProviderProps } from "../types/providerProps";
import { ProductFilter } from "../types/product";

// Los contextos son una forma de inyeccion de dependencia.
// Pensado para estados globales que cambien con poca frecuencia o estaticos (e. g. theme(oscuro o claro), shoppingCart, user auth, lenguage, loading, etc)

interface FilterContextType {
  filter: ProductFilter,
  setFilter: Dispatch<SetStateAction<ProductFilter>>
}

// Mediante este nos comunicamos
export const FiltersContext = createContext<FilterContextType>({
  filter: { 
    category: 'all',
    minPrice: 0
  },
  setFilter: () => {}
});

// Este nos provee acceso al contexto
export const FiltersProvider = ({ children }: ProviderProps) => {
    const [filter, setFilter] = useState<ProductFilter>({
      category: 'all',
      minPrice: 0
    });

    return (
      <FiltersContext.Provider
        value={
          {filter, setFilter}}
      >
        {children}
      </FiltersContext.Provider>
    );
  };
  