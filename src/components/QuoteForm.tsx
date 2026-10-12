import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CircleCheck, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { contact } from '@/lib/brand'

const services = [
  { value: 'ftl', label: 'Full truckload (FTL)' },
  { value: 'ltl', label: 'Less than truckload (LTL)' },
  { value: 'expedited', label: 'Expedited / time-critical' },
  { value: 'unsure', label: 'Not sure yet — advise me' },
]

const schema = z.object({
  company: z.string().min(2, 'Tell us the company name we are quoting for.'),
  email: z.string().pipe(z.email('Enter an address we can reply to.')),
  service: z.string().min(1, 'Choose the type of load.'),
  pickup: z.string().min(2, 'Where are we picking up?'),
  delivery: z.string().min(2, 'Where is it going?'),
  date: z.string().min(1, 'When should the truck be there?'),
  freight: z.string().min(10, 'Describe the freight: what it is, how much, how it is packed.'),
})

type QuoteValues = z.infer<typeof schema>

const fieldClass = 'h-11 md:h-11'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-destructive">
      {message}
    </p>
  )
}

/* There is no server behind this form, so it does not pretend to send: it
   validates, then hands the shipper a ready-to-send email to dispatch. */
export function QuoteForm() {
  const [sent, setSent] = useState<QuoteValues | null>(null)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(schema),
    defaultValues: { company: '', email: '', service: '', pickup: '', delivery: '', date: '', freight: '' },
  })

  const onSubmit = (values: QuoteValues) => {
    // No backend yet: this stands in for the send, and the panel below gives
    // the shipper a mailto that actually goes somewhere.
    setSent(values)
  }

  const mailtoHref = sent
    ? `mailto:${contact.dispatch}?subject=${encodeURIComponent(
        `Quote request — ${services.find((s) => s.value === sent.service)?.label ?? sent.service}`,
      )}&body=${encodeURIComponent(
        [
          `Company: ${sent.company}`,
          `Reply to: ${sent.email}`,
          `Service: ${services.find((s) => s.value === sent.service)?.label ?? sent.service}`,
          `Pickup: ${sent.pickup}`,
          `Delivery: ${sent.delivery}`,
          `Ready date: ${sent.date}`,
          '',
          'Freight:',
          sent.freight,
        ].join('\n'),
      )}`
    : undefined

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-background p-6 shadow-raised sm:p-8" role="status">
        <CircleCheck className="size-7 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-600 uppercase">Quote request ready</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          This site has no server yet, so nothing was sent from this page. Tap the button below and
          your request opens in your own email app, addressed to dispatch with every detail already
          filled in — send it from there and dispatch picks it up.
        </p>
        <div className="mt-6 rounded-md bg-muted p-4 font-mono text-xs leading-relaxed text-foreground">
          <p>To: {contact.dispatch}</p>
          <p className="mt-2">Company: {sent.company}</p>
          <p>Service: {services.find((s) => s.value === sent.service)?.label ?? sent.service}</p>
          <p>Pickup: {sent.pickup}</p>
          <p>Delivery: {sent.delivery}</p>
          <p>Ready: {sent.date}</p>
          <p className="mt-2 whitespace-pre-wrap">Freight: {sent.freight}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={mailtoHref}>
              <Mail />
              Open this in my email app
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => setSent(null)}>
            Edit the request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-border bg-background p-6 shadow-raised sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-company">Company</Label>
          <Input
            id="q-company"
            className={`mt-2 ${fieldClass}`}
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'q-company-error' : undefined}
            {...register('company')}
          />
          <FieldError id="q-company-error" message={errors.company?.message} />
        </div>

        <div>
          <Label htmlFor="q-email">Email</Label>
          <Input
            id="q-email"
            type="email"
            className={`mt-2 ${fieldClass}`}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'q-email-error' : undefined}
            {...register('email')}
          />
          <FieldError id="q-email-error" message={errors.email?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="q-service">Type of load</Label>
          <Select onValueChange={(v) => setValue('service', v, { shouldValidate: true })}>
            <SelectTrigger
              id="q-service"
              className="mt-2 h-11 w-full"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'q-service-error' : undefined}
            >
              <SelectValue placeholder="Choose FTL, LTL or expedited" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError id="q-service-error" message={errors.service?.message} />
        </div>

        <div>
          <Label htmlFor="q-pickup">Pickup city or postal code</Label>
          <Input
            id="q-pickup"
            className={`mt-2 ${fieldClass}`}
            placeholder="Brampton, L6T"
            aria-invalid={!!errors.pickup}
            aria-describedby={errors.pickup ? 'q-pickup-error' : undefined}
            {...register('pickup')}
          />
          <FieldError id="q-pickup-error" message={errors.pickup?.message} />
        </div>

        <div>
          <Label htmlFor="q-delivery">Delivery city or postal code</Label>
          <Input
            id="q-delivery"
            className={`mt-2 ${fieldClass}`}
            placeholder="Ottawa, K1A"
            aria-invalid={!!errors.delivery}
            aria-describedby={errors.delivery ? 'q-delivery-error' : undefined}
            {...register('delivery')}
          />
          <FieldError id="q-delivery-error" message={errors.delivery?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="q-date">When is the truck needed?</Label>
          <Input
            id="q-date"
            type="date"
            className={`mt-2 ${fieldClass}`}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? 'q-date-error' : undefined}
            {...register('date')}
          />
          <FieldError id="q-date-error" message={errors.date?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="q-freight">What are we moving?</Label>
          <Textarea
            id="q-freight"
            className="mt-2"
            rows={4}
            placeholder="Six skids of packaged food, 4,800 kg, dock-level both ends."
            aria-invalid={!!errors.freight}
            aria-describedby={errors.freight ? 'q-freight-error' : undefined}
            {...register('freight')}
          />
          <FieldError id="q-freight-error" message={errors.freight?.message} />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-7 w-full sm:w-auto">
        <Send />
        {isSubmitting ? 'Checking details…' : 'Send my quote request'}
      </Button>

      <p className="mt-3 text-sm text-muted-foreground">
        We do not handle residential moves, household goods or personal vehicles — building
        materials, packaged goods, machinery and palletised freight are our work.
      </p>
    </form>
  )
}
