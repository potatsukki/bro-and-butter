import { useMemo, useState } from 'react';

type PaymentModalProps = {
  isOpen: boolean;
  itemLabel: string;
  onClose: () => void;
};

const PAYMENT_FEE = 295;

const qrCandidates = [
  '/images/payment-qr.png',
  '/images/payment-qr.jpg',
  '/images/qrcode.png',
  '/images/qrcode.jpg',
  '/images/qr.png',
  '/images/qr.jpg',
];

function PaymentModal({ isOpen, itemLabel, onClose }: PaymentModalProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);

  const qrSrc = useMemo(() => qrCandidates[candidateIndex] ?? null, [candidateIndex]);
  const hasAnyCandidateLeft = candidateIndex < qrCandidates.length;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#faf9f5]"
      role="dialog"
      aria-modal="true"
      aria-label="Payment details"
    >
      <div className="mx-auto min-h-screen w-full max-w-3xl px-5 py-8 sm:px-6 md:px-8 md:py-10">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c605a]">Payment</p>
            <h3 className="mt-2 font-headline text-4xl text-[#2f342e] md:text-5xl">P{PAYMENT_FEE}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#d9d5cc] text-[#2f342e] transition-colors hover:bg-[#f2f0ea]"
            aria-label="Close payment modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="mb-6 text-base leading-[1.7] text-[#5c605a] md:text-lg">
          Order: <span className="font-semibold text-[#2f342e]">{itemLabel}</span>
          <br />
          Scan the QR code below to pay.
        </p>

        <div className="rounded-[12px] border border-[#d9d5cc] bg-white p-4 md:p-6">
          {hasAnyCandidateLeft && qrSrc ? (
            <img
              src={qrSrc}
              alt="Payment QR code"
              className="mx-auto aspect-square w-full max-w-[460px] rounded-[10px] border border-[#d9d5cc] bg-white object-contain"
              onError={() => setCandidateIndex((previous) => previous + 1)}
            />
          ) : (
            <div className="rounded-[8px] border border-dashed border-[#d9d5cc] px-4 py-8 text-center text-sm text-[#5c605a]">
              QR code not found. Add your QR image in public/images as one of:
              <br />
              payment-qr.png, payment-qr.jpg, qrcode.png, qrcode.jpg, qr.png, or qr.jpg.
            </div>
          )}
        </div>

          <div className="mt-6 flex items-center justify-between gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#5c605a]">Amount: P{PAYMENT_FEE}</span>
          <button
            type="button"
            onClick={onClose}
              className="rounded-[8px] bg-[#603813] px-6 py-3 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#4d2c25]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
