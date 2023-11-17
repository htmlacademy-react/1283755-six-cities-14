import {createAction} from '@reduxjs/toolkit';
import { OfferType, SortingType } from '../types/types';
import { SortOption } from '../const';

export const changeCity = createAction<{activeCity: string}>('offers/changeCity');

export const fetchOffers = createAction<OfferType[]>('offers/fetchOffers');

export const fetchFavorites = createAction<OfferType[]>('favorites/fetchFavorites');

export const setSortedType = createAction<{activeSortedType: typeof SortOption[SortingType]}>('offers/setSortedType');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
