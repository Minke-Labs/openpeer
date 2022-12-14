import Button from 'components/Button/Button';
import StepLayout from 'components/Listing/StepLayout';
import HeaderH2 from 'components/SectionHeading/h2';

import { CheckBadgeIcon, HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

import { BuyStepProps } from './Buy.types';
import ClipboardText from './ClipboardText';

const Completed = ({ order, updateOrder }: BuyStepProps) => {
	return (
		<>
			<StepLayout>
				<div className="my-8">
					<div className="mb-4">
						<span className="flex flex-row text-green-600 mb-2">
							<CheckBadgeIcon className="w-8 mr-2" />
							<HeaderH2 title="Purchase Complete" />
						</span>
						<p className="text-base">You have successfully purchased 159 USDT from Crypto Lurd.</p>
					</div>

					<div className="w-full bg-white rounded-lg border border-color-gray-100 p-6">
						<div className="flex flex-row justify-between mb-4">
							<span className="text-[#6A6A6A]">Amount Paid</span>
							<span className="flex flex-row justify-between">INR₹159</span>
						</div>

						<div className="flex flex-row justify-between mb-4">
							<span className="text-[#6A6A6A]">Amount Received</span>
							<span className="flex flex-row justify-between">159 USDT</span>
						</div>
						<div className="flex flex-row justify-between mb-4">
							<span className="text-[#6A6A6A]">Order Time</span>
							<span className="flex flex-row justify-between">11:00am, 12/11/2022</span>
						</div>
						<div className="flex flex-row justify-between mb-4">
							<span className="text-[#6A6A6A]">Reference No.</span>
							<span className="flex flex-row justify-between">
								<ClipboardText itemValue="0112233322224" />
							</span>
						</div>
						<div className="border-bottom border border-color-gray-200 mb-4"></div>
						<div className="flex flex-row items-center justify-between">
							<span className="text-[#6A6A6A]">Rate merchant </span>
							<span className="w-1/2">
								<div className="flex flex-col flex-col-reverse md:flex-row items-center">
									<span className="w-full md:pr-8">
										<Button
											title={
												<>
													<div className="flex flex-row items-center justify-center">
														<HandThumbUpIcon className="w-6" />
														<span className="ml-2">Good</span>
													</div>
												</>
											}
											outlined
										/>
									</span>
									<span className="w-full">
										<Button
											title={
												<>
													<div className="flex flex-row items-center justify-center">
														<HandThumbDownIcon className="w-6" />
														<span className="ml-2">Bad</span>
													</div>
												</>
											}
											outlined
										/>
									</span>
								</div>
							</span>
						</div>
					</div>
					<div className="mt-8">
						<Button title="Goto wallet" />
					</div>
				</div>
			</StepLayout>
		</>
	);
};

export default Completed;
