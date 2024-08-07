import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ProductOneDetails from "./ProductOneDetails";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.productsGridWrapper, className].join(" ")}>
      <div className={styles.productsGrid}>
        <div className={styles.productRow}>
          <div className={styles.productTileOne}>
            <div className={styles.image2RemovebgPreview1Parent}>
              <img
                className={styles.image2RemovebgPreview1Icon}
                alt=""
                src="/image-2removebgpreview-11@2x.png"
              />
              <div className={styles.outlineWrapper}>
                <img
                  className={styles.outlineIcon}
                  loading="lazy"
                  alt=""
                  src="/outline-3.svg"
                />
              </div>
            </div>
            <ProductOneDetails
              classicLeatherBoots="Classic Leather Boots"
              reviews="(850 Reviews)"
              productOneDescription="$150"
              craftedFromPremiumFullGra="Crafted from premium full-grain leather, our Classic Leather Boots combine durability and elegance. Perfect for any occasion with a sleek design, reinforced stitching, and a sturdy sole. Available in various sizes and rich colors."
            />
          </div>
          <div className={styles.productTileOne}>
            <div className={styles.image5RemovebgPreview1Wrapper}>
              <img
                className={styles.image5RemovebgPreview1Icon}
                loading="lazy"
                alt=""
                src="/image-5removebgpreview-11@2x.png"
              />
            </div>
            <ProductOneDetails
              propMinHeight="223px"
              classicLeatherBoots="Elegant Heels"
              reviews="(700 Reviews)"
              productOneDescription="$95"
              craftedFromPremiumFullGra="Step into sophistication with our Elegant Heels. These stylish and comfortable heels feature a sleek silhouette, cushioned insole, and durable construction. Available in various colors to match any outfit."
            />
          </div>
        </div>
        <div className={styles.cartSidebar}>
          <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
              <div className={styles.cartSummary}>Cart Summary</div>
              <div className={styles.cartSubtotal}>
                <div className={styles.subtotalRow}>
                  <div className={styles.subtotal}>Subtotal</div>
                  <div className={styles.subtotalValue}>$245</div>
                </div>
              </div>
              <Button
                className={styles.cartHeaderChild}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "13.5",
                  background: "#7d2e0b",
                  borderRadius: "8px",
                  "&:hover": { background: "#7d2e0b" },
                  height: 42,
                }}
              >
                Checkout
              </Button>
            </div>
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryIcons}>
                <div className={styles.deliveryReturn}>
                  <div className={styles.iconsRow}>
                    <img
                      className={styles.iconDelivery}
                      loading="lazy"
                      alt=""
                      src="/icondelivery.svg"
                    />
                  </div>
                  <div className={styles.freeDeliveryParent}>
                    <div className={styles.freeDelivery}>Free Delivery</div>
                    <div className={styles.enterYourPostal}>
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.underlineIcon}
                loading="lazy"
                alt=""
                src="/underline.svg"
              />
              <div className={styles.deliveryIcons1}>
                <div className={styles.frameParent}>
                  <div className={styles.iconsRow}>
                    <img
                      className={styles.iconDelivery}
                      loading="lazy"
                      alt=""
                      src="/iconreturn.svg"
                    />
                  </div>
                  <div className={styles.freeDeliveryParent}>
                    <div className={styles.returnDelivery}>Return Delivery</div>
                    <div className={styles.free30DaysContainer}>
                      {`Free 30 Days Delivery Returns. `}
                      <span className={styles.details}>Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
