import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./CheckoutContent.module.css";

export type CheckoutContentType = {
  className?: string;
};

const CheckoutContent: FunctionComponent<CheckoutContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.checkoutContent, className].join(" ")}>
      <div className={styles.checkout}>Checkout</div>
      <div className={styles.checkoutContentInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.billingDetailsWrapper}>
            <h1 className={styles.billingDetails}>Billing Details</h1>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.fieldLabels}>
              <div className={styles.firstName}>
                <span>First Name</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels1}>
              <div className={styles.lastName}>Last Name</div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels}>
              <div className={styles.streetAddress}>
                <span>Street Address</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels1}>
              <div className={styles.apartmentFloorEtc}>
                Apartment, floor, etc. (optional)
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels}>
              <div className={styles.towncity}>
                <span>Town/City</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels}>
              <div className={styles.phoneNumber}>
                <span>Phone Number</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
            <div className={styles.fieldLabels}>
              <div className={styles.emailAddress}>
                <span>Email Address</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.fieldLabelsChild} />
            </div>
          </div>
          <div className={styles.iconCheckboxParent}>
            <img
              className={styles.iconCheckbox}
              loading="lazy"
              alt=""
              src="/iconcopyright.svg"
            />
            <div className={styles.apartmentFloorEtc}>
              Save this information for faster check-out next time
            </div>
          </div>
        </div>
        <div className={styles.orderSummary}>
          <h1 className={styles.order}>Order</h1>
          <div className={styles.summaryColumns}>
            <div className={styles.couponColumn}>
              <img
                className={styles.image2RemovebgPreview1Icon}
                loading="lazy"
                alt=""
                src="/image-2removebgpreview-1@2x.png"
              />
            </div>
            <div className={styles.productColumns}>
              <div className={styles.productRows}>
                <div className={styles.productDetails}>
                  <div className={styles.classicLeatherBoots}>
                    Classic Leather Boots
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.ratingRows}>
                      <div className={styles.ratingDetails}>
                        <img
                          className={styles.solarstarBoldIcon}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon1}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon2}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon3}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon4}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                      </div>
                      <div className={styles.reviews}>(700 Reviews)</div>
                    </div>
                    <div className={styles.stockRows}>
                      <div className={styles.stockDividers} />
                      <div className={styles.inStock}>In Stock</div>
                    </div>
                  </div>
                  <div className={styles.delimiter}>$150</div>
                </div>
              </div>
              <div className={styles.craftedFromPremium}>
                Crafted from premium full-grain leather, our Classic Leather
                Boots combine durability and elegance. Perfect for any occasion
                with a sleek design, reinforced stitching, and a sturdy sole.
                Available in various sizes and rich colors.
              </div>
              <div className={styles.actionButtons}>
                <img
                  className={styles.outlineIcon}
                  alt=""
                  src="/outline-31.svg"
                />
                <div className={styles.remove}>Remove</div>
              </div>
            </div>
          </div>
          <div className={styles.summaryColumns}>
            <div className={styles.image5RemovebgPreview1Wrapper}>
              <img
                className={styles.image5RemovebgPreview1Icon}
                loading="lazy"
                alt=""
                src="/image-2removebgpreview-11@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.elegantHeelsParent}>
                  <div className={styles.elegantHeels}>Elegant Heels</div>
                  <div className={styles.productInfo}>
                    <div className={styles.ratingRows}>
                      <div className={styles.ratingDetails}>
                        <img
                          className={styles.solarstarBoldIcon}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon1}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon2}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon3}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                        <img
                          className={styles.solarstarBoldIcon4}
                          alt=""
                          src="/solarstarbold.svg"
                        />
                      </div>
                      <div className={styles.reviews}>(700 Reviews)</div>
                    </div>
                    <div className={styles.stockRows}>
                      <div className={styles.stockDividers} />
                      <div className={styles.inStock}>In Stock</div>
                    </div>
                  </div>
                  <div className={styles.div}>$95</div>
                </div>
              </div>
              <div className={styles.craftedFromPremium}>
                Step into sophistication with our Elegant Heels. These stylish
                and comfortable heels feature a sleek silhouette, cushioned
                insole, and durable construction. Available in various colors to
                match any outfit.
              </div>
              <div className={styles.actionButtons}>
                <img
                  className={styles.outlineIcon}
                  alt=""
                  src="/outline-31.svg"
                />
                <div className={styles.remove}>Remove</div>
              </div>
            </div>
          </div>
          <div className={styles.calculationsWrapper}>
            <div className={styles.calculations}>
              <div className={styles.totalBreakdown}>
                <div className={styles.calculationRows}>
                  <div className={styles.calculationDetails}>
                    <div className={styles.subtotalLabel}>
                      <div className={styles.subtotal}>Subtotal:</div>
                      <div className={styles.subtotal1}>$245</div>
                    </div>
                    <img
                      className={styles.underlineIcon}
                      loading="lazy"
                      alt=""
                      src="/underline1.svg"
                    />
                  </div>
                  <div className={styles.subtotalLabel}>
                    <a className={styles.shipping}>Shipping:</a>
                    <div className={styles.free}>Free</div>
                  </div>
                </div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline1.svg"
                />
              </div>
              <div className={styles.subtotalLabel}>
                <div className={styles.total}>Total:</div>
                <div className={styles.total1}>$2240</div>
              </div>
            </div>
          </div>
          <div className={styles.paymentOptionsWrapper}>
            <div className={styles.paymentOptions}>
              <div className={styles.bankTransfer}>
                <div className={styles.bankSelection}>
                  <input
                    className={styles.radioButton}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div className={styles.bank}>Bank</div>
                </div>
              </div>
              <div className={styles.cardPayment}>
                <div className={styles.visa}>
                  <img
                    className={styles.image30Icon}
                    loading="lazy"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <img
                  className={styles.mastercardIcon}
                  loading="lazy"
                  alt=""
                  src="/mastercard@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.cashDelivery}>
            <div className={styles.bankSelection}>
              <input className={styles.radioButton} type="radio" />
              <div className={styles.apartmentFloorEtc}>Cash on delivery</div>
            </div>
          </div>
          <div className={styles.summaryColumns2}>
            <div className={styles.couponCode}>
              <TextField
                className={styles.couponButton}
                placeholder="Coupon Code"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#000" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.5)" },
                }}
              />
              <Button
                className={styles.button}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fafafa",
                  fontSize: "16",
                  background: "#ff8933",
                  borderRadius: "4px",
                  "&:hover": { background: "#ff8933" },
                }}
              >
                Apply Coupon
              </Button>
            </div>
          </div>
          <div className={styles.summaryColumns3}>
            <Button
              className={styles.button1}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fafafa",
                fontSize: "16",
                background: "#ff8933",
                borderRadius: "4px",
                "&:hover": { background: "#ff8933" },
              }}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
