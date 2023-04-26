import {
  CREATE_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  NO_DATA,
} from "../types";

export const createSaintData = (data) => ({ type: CREATE_DATA, payload: data });

export const readAllData = (data) => ({ type: READ_ALL_DATA, payload: data });

export const updateSaintData = (data) => ({ type: UPDATE_DATA, payload: data });

export const deleteSaintData = (id) => ({ type: DELETE_DATA, payload: id });

export const noData = () => ({ type: NO_DATA });
