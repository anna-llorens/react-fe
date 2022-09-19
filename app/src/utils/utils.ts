import { useEffect, useState } from "react";

export const asyncLoop = async (array: any, cb: any) => {
  console.info('Get options async Start');
  for (let index = 0; index < array.length; index++) {
    await cb(array[index], index, array);
  }
  console.info('Get options async End');
}

export const addDelay = async (delay: any) =>
  new Promise(r => setTimeout(r, delay));
