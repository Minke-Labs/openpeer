import Avatar from 'components/Avatar';
import Button from 'components/Button/Button';
import Loading from 'components/Loading/Loading';
import { List } from 'models/types';

import {
	ChartBarSquareIcon, ChatBubbleLeftEllipsisIcon, StarIcon
} from '@heroicons/react/24/outline';

const SummaryBuy = ({ list, price }: { list: List; price: number | undefined }) => {
	const {
		fiat_currency: currency,
		limit_min: limitMin,
		limit_max: limitMax,
		payment_method: paymentMethod,
		seller,
		token,
		margin_type: marginType
	} = list || {};

	return (
		<div className="w-2/4 hidden md:inline-block bg-white rounded-xl border-2 border-slate-100 overflow-hidden shadow-sm md:ml-16 md:px-8 md:py-4 p-4">
			<div className="flex flex-row justify-between items-center mb-6 mt-4 px-2">
				<div className="flex flex-row items-center">
					<Avatar user={seller} />
					<span className="ml-2">{seller.address}</span>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row">
						<ChartBarSquareIcon className="w-6 mr-2 text-gray-500" />
						<span>150 Trades</span>
					</div>
					<div className="flex flex-row ml-4">
						<StarIcon className="w-6 mr-2 text-yellow-400" />
						<span> 4.5 </span>
					</div>
				</div>
			</div>
			<ul className="flex flex-col bg-gray-100 rounded-lg p-6">
				<li className="w-full flex flex-row justify-between mb-4">
					<div>Price</div>
					<div className="font-bold">
						{currency.symbol} {price}
					</div>
				</li>
				{!!limitMin && (
					<li className="w-full flex flex-row justify-between mb-4">
						<div>Min order</div>
						<div className="font-bold">
							{currency.symbol} {limitMin}
						</div>
					</li>
				)}
				{!!limitMax && (
					<li className="w-full flex flex-row justify-between mb-4">
						<div>Max order</div>
						<div className="font-bold">
							{currency.symbol} {limitMax}
						</div>
					</li>
				)}
				<li className="w-full flex flex-row justify-between mb-4">
					<div>Payment channel</div>
					<div className="font-bold">{paymentMethod?.bank?.name}</div>
				</li>
				{/* <li className="w-full flex flex-row justify-between mb-4">
					<div>Payment Limit</div>
					<div className="font-bold">10 minutes</div>
				</li> */}
			</ul>
			<div className="mt-6">
				<span className="text-[#3C9AAA]">Please Note</span>
				<p className="mt-2">
					Please do not include any crypto related keywords like {token.symbol} or OpenPeer. Thanks for doing
					business with me.
				</p>
				<Button
					title={
						<>
							<span className="flex flex-row items-center justify-center">
								<span className="mr-2">Chat with merchant</span>
								<ChatBubbleLeftEllipsisIcon className="w-8" />
							</span>
						</>
					}
					outlined
				/>
			</div>
		</div>
	);
};

export default SummaryBuy;
