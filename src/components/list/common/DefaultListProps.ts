import React from 'react';
import { IUser } from 'utils/interfaces/IUser';
import { ListType } from './ListTypeEnum';

export interface IDefaultListProps {
	type?: ListType;
	items: IUser[] | null;
}

export type DefaultListProps = IDefaultListProps;
